/**
 * =========================================================================
 * PRASOBH KUMAR - ULTRA-HD 300-FRAME APPLE SCROLL SEQUENCE ENGINE
 * =========================================================================
 * 
 * Features:
 * - High-DPI Retina Display Canvas Scaling (2x DPR Crisp Resolution)
 * - Hardware Image Decode with High-Quality Bicubic Interpolation
 * - Deterministic Zero-Jitter Scroll Tracking with Smooth Momentum Lerp
 * - Tiered Priority Preloader (Keyframes First -> Full Sequence Stream)
 * - Synchronized Frosted Glass Narrative Stage Cards
 * - Real-Time Engineering Telemetry HUD Readout
 */

(function () {
  'use strict';

  const TOTAL_FRAMES = 200;
  const FRAME_PREFIX = '/public/images/herosection/ezgif-frame-';
  const FRAME_EXT = '.jpg';

  const container = document.querySelector('.hero-scroll-container') || document.getElementById('home');
  const canvas = document.getElementById('hero-scroll-canvas');
  if (!canvas || !container) return;

  const ctx = canvas.getContext('2d', { alpha: false });
  const images = new Array(TOTAL_FRAMES);
  const loaded = new Array(TOTAL_FRAMES).fill(false);

  let currentFrame = 0;
  let targetFrame = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  // Narrative Stage Cards
  const cards = [
    document.getElementById('hero-phase-1'),
    document.getElementById('hero-phase-2'),
    document.getElementById('hero-phase-3'),
    document.getElementById('hero-phase-4')
  ];

  // Telemetry HUD Elements
  const hudStage = document.getElementById('hud-stage-text');
  const hudFrame = document.getElementById('hud-frame-text');
  const hudProgress = document.getElementById('hud-progress-text');

  function getFrameUrl(idx) {
    const num = String(idx + 1).padStart(3, '0');
    return `${FRAME_PREFIX}${num}${FRAME_EXT}`;
  }

  // -----------------------------------------------------------------------
  // 1. TIERED HIGH-SPEED PRELOADER
  // -----------------------------------------------------------------------
  function preloadImages() {
    // 1. Priority 1: Keyframe Anchors (Instant responsiveness across whole sequence)
    const keyframes = [0, 50, 100, 150, 200, 250, 299];
    keyframes.forEach(idx => {
      loadSingleFrame(idx, true);
    });

    // 2. Priority 2: First 60 frames (Stage 1 Blueprint)
    for (let i = 1; i < 60; i++) {
      if (!keyframes.includes(i)) loadSingleFrame(i, false);
    }

    // 3. Priority 3: Remaining frames in 8 concurrent streams
    let cursor = 60;
    const CONCURRENCY = 8;

    function queueWorker() {
      if (cursor >= TOTAL_FRAMES) return;
      const idx = cursor++;
      if (loaded[idx]) {
        queueWorker();
        return;
      }
      loadSingleFrame(idx, false, () => {
        queueWorker();
      });
    }

    for (let w = 0; w < CONCURRENCY; w++) {
      queueWorker();
    }
  }

  function loadSingleFrame(idx, isKeyframe, callback) {
    if (images[idx]) {
      if (callback) callback();
      return;
    }

    const img = new Image();
    img.onload = () => {
      if (img.decode) {
        img.decode().then(() => {
          images[idx] = img;
          loaded[idx] = true;
          if (Math.round(currentFrame) === idx) {
            render();
          }
          if (callback) callback();
        }).catch(() => {
          images[idx] = img;
          loaded[idx] = true;
          if (callback) callback();
        });
      } else {
        images[idx] = img;
        loaded[idx] = true;
        if (Math.round(currentFrame) === idx) {
          render();
        }
        if (callback) callback();
      }
    };
    img.onerror = () => {
      setTimeout(() => {
        const retry = new Image();
        retry.onload = () => {
          images[idx] = retry;
          loaded[idx] = true;
        };
        retry.src = getFrameUrl(idx);
      }, 300);
      if (callback) callback();
    };
    img.src = getFrameUrl(idx);
  }

  // Nearest loaded frame finder
  function getNearestFrame(targetIdx) {
    if (loaded[targetIdx] && images[targetIdx]) {
      return images[targetIdx];
    }
    // Search backward
    for (let i = targetIdx - 1; i >= 0; i--) {
      if (loaded[i] && images[i]) return images[i];
    }
    // Search forward
    for (let i = targetIdx + 1; i < TOTAL_FRAMES; i++) {
      if (loaded[i] && images[i]) return images[i];
    }
    return images[0] || null;
  }

  // -----------------------------------------------------------------------
  // 2. ULTRA-HD CANVAS DRAWING
  // -----------------------------------------------------------------------
  function drawCanvas(frameIdx) {
    const img = getNearestFrame(frameIdx);
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const w = canvas.width;
    const h = canvas.height;
    if (w === 0 || h === 0) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;
    const imgRatio = imgW / imgH;
    const canvasRatio = w / h;

    let renderW, renderH, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      renderW = w;
      renderH = w / imgRatio;
      offsetX = 0;
      offsetY = (h - renderH) / 2;
    } else {
      renderW = h * imgRatio;
      renderH = h;
      offsetX = (w - renderW) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);

    // Subtle dark gradient vignette for depth & text readability
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.45)');
    grad.addColorStop(0.2, 'rgba(0, 0, 0, 0.05)');
    grad.addColorStop(0.8, 'rgba(0, 0, 0, 0.05)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0.75)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
  }

  function resizeCanvas() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const winW = window.innerWidth;
    const winH = window.innerHeight;

    canvas.width = Math.round(winW * dpr);
    canvas.height = Math.round(winH * dpr);
    canvas.style.width = `${winW}px`;
    canvas.style.height = `${winH}px`;

    render();
  }

  function render() {
    const frameIdx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(currentFrame)));
    drawCanvas(frameIdx);

    const progress = frameIdx / (TOTAL_FRAMES - 1);
    updateTelemetry(frameIdx, progress);
    updateNarrativeCards(progress);
  }

  // -----------------------------------------------------------------------
  // 3. ANIMATION LOOP (Smooth Momentum Lerp)
  // -----------------------------------------------------------------------
  function animationLoop() {
    if (Math.abs(currentFrame - targetFrame) > 0.01) {
      currentFrame += (targetFrame - currentFrame) * 0.22;
      render();
    }
    requestAnimationFrame(animationLoop);
  }

  function updateTelemetry(frameIdx, progress) {
    if (hudFrame) {
      hudFrame.textContent = `FRAME: ${String(frameIdx + 1).padStart(3, '0')}/${TOTAL_FRAMES}`;
    }
    if (hudProgress) {
      hudProgress.textContent = `${Math.round(progress * 100)}%`;
    }
  }

  function updateNarrativeCards(progress) {
    const p1 = cards[0];
    const p2 = cards[1];
    const p3 = cards[2];
    const p4 = cards[3];

    // Stage 1 (0% to 22%): 2D Blueprint & Intro
    if (progress < 0.22) {
      const alpha = 1 - Math.max(0, (progress - 0.16) / 0.06);
      setCard(p1, true, alpha);
      if (hudStage) hudStage.textContent = 'STAGE 01 // 2D CAD SCHEMATIC';
    } else {
      setCard(p1, false, 0);
    }

    // Stage 2 (22% to 44%): 3D Turbomachinery
    if (progress >= 0.22 && progress < 0.44) {
      let alpha = 1;
      if (progress < 0.27) alpha = (progress - 0.22) / 0.05;
      else if (progress > 0.39) alpha = 1 - (progress - 0.39) / 0.05;
      setCard(p2, true, alpha);
      if (hudStage) hudStage.textContent = 'STAGE 02 // 3D TURBOMACHINERY';
    } else {
      setCard(p2, false, 0);
    }

    // Stage 3 (44% to 66%): Aerodynamic Flight
    if (progress >= 0.44 && progress < 0.66) {
      let alpha = 1;
      if (progress < 0.49) alpha = (progress - 0.44) / 0.05;
      else if (progress > 0.61) alpha = 1 - (progress - 0.61) / 0.05;
      setCard(p3, true, alpha);
      if (hudStage) hudStage.textContent = 'STAGE 03 // AERODYNAMIC FLIGHT';
    } else {
      setCard(p3, false, 0);
    }

    // Stage 4 (66% to 100%): Stratospheric Ascent & Climax
    // Appears early (at 66%) so the quote and aircraft animation finish simultaneously!
    if (progress >= 0.66) {
      const alpha = Math.min(1, Math.max(0, (progress - 0.66) / 0.10));
      setCard(p4, true, alpha);
      if (hudStage) hudStage.textContent = 'STAGE 04 // STRATOSPHERIC ASCENT';
    } else {
      setCard(p4, false, 0);
    }
  }

  function setCard(card, isVisible, opacity) {
    if (!card) return;
    if (isVisible && opacity > 0.01) {
      card.style.opacity = opacity.toFixed(3);
      card.style.pointerEvents = opacity > 0.4 ? 'auto' : 'none';
      const yOffset = (1 - opacity) * 20;
      card.style.transform = `translate(-50%, calc(-50% + ${yOffset.toFixed(1)}px))`;
      card.classList.add('active');
    } else {
      card.style.opacity = '0';
      card.style.pointerEvents = 'none';
      card.style.transform = 'translate(-50%, calc(-50% + 25px))';
      card.classList.remove('active');
    }
  }

  // -----------------------------------------------------------------------
  // 4. PRECISION SCROLL TRACKER
  // -----------------------------------------------------------------------
  function onScroll() {
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const containerHeight = container.offsetHeight;
    const viewportHeight = window.innerHeight;
    const maxScroll = containerHeight - viewportHeight;

    if (maxScroll > 0) {
      const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
      targetFrame = progress * (TOTAL_FRAMES - 1);
    }
  }

  // Event Listeners
  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('load', () => {
    resizeCanvas();
    onScroll();
    render();
  });

  // Init Engine
  resizeCanvas();
  onScroll();
  preloadImages();
  animationLoop();
})();
