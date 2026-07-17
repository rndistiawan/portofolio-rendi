import * as THREE from "three";

export type SoftParticlesHandle = {
  canvas: HTMLCanvasElement;
  resize: () => void;
  setPointer: (nx: number, ny: number) => void;
  dispose: () => void;
  pause: () => void;
  resume: () => void;
};

type Options = {
  particleCount?: number;
  color?: string;
  colorSecondary?: string;
};

/**
 * Soft sage particle field for portfolio hero ambient background.
 * Transform/render only; pauses when tab hidden; dispose cleans GPU resources.
 */
export function createSoftParticles(
  container: HTMLElement,
  options: Options = {},
): SoftParticlesHandle {
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;
  const count = options.particleCount ?? (isMobile ? 48 : 110);
  const colorA = options.color ?? "#c45c26";
  const colorB = options.colorSecondary ?? "#1e3d32";

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
  camera.position.z = 6;

  const renderer = new THREE.WebGLRenderer({
    antialias: false,
    alpha: true,
    powerPreference: "low-power",
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

  const canvas = renderer.domElement;
  canvas.style.display = "block";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.setAttribute("aria-hidden", "true");
  container.appendChild(canvas);

  const positions = new Float32Array(count * 3);
  const speeds = new Float32Array(count);
  const phases = new Float32Array(count);
  const colors = new Float32Array(count * 3);
  const c1 = new THREE.Color(colorA);
  const c2 = new THREE.Color(colorB);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 10;
    positions[i3 + 1] = (Math.random() - 0.5) * 7;
    positions[i3 + 2] = (Math.random() - 0.5) * 4;
    speeds[i] = 0.12 + Math.random() * 0.25;
    phases[i] = Math.random() * Math.PI * 2;
    const mix = Math.random();
    const col = c1.clone().lerp(c2, mix);
    colors[i3] = col.r;
    colors[i3 + 1] = col.g;
    colors[i3 + 2] = col.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: isMobile ? 0.045 : 0.06,
    vertexColors: true,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  let pointerX = 0;
  let pointerY = 0;
  let targetX = 0;
  let targetY = 0;
  let raf = 0;
  let running = true;
  let t0 = performance.now();

  const resize = () => {
    const w = container.clientWidth || 1;
    const h = container.clientHeight || 1;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  };

  const setPointer = (nx: number, ny: number) => {
    // nx/ny expected -1..1
    targetX = nx * 0.35;
    targetY = ny * 0.25;
  };

  const tick = (now: number) => {
    if (!running) return;
    raf = requestAnimationFrame(tick);
    const elapsed = (now - t0) / 1000;

    pointerX += (targetX - pointerX) * 0.04;
    pointerY += (targetY - pointerY) * 0.04;

    const pos = geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const s = speeds[i];
      const p = phases[i];
      pos[i3 + 1] += Math.sin(elapsed * s + p) * 0.0018;
      pos[i3] += Math.cos(elapsed * s * 0.7 + p) * 0.0012;
    }
    geometry.attributes.position.needsUpdate = true;

    points.rotation.y = elapsed * 0.03 + pointerX * 0.15;
    points.rotation.x = pointerY * 0.12;
    camera.position.x = pointerX * 0.4;
    camera.position.y = pointerY * 0.25;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  };

  const pause = () => {
    running = false;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  };

  const resume = () => {
    if (running) return;
    running = true;
    t0 = performance.now();
    raf = requestAnimationFrame(tick);
  };

  const onVisibility = () => {
    if (document.hidden) pause();
    else resume();
  };

  document.addEventListener("visibilitychange", onVisibility);
  resize();
  raf = requestAnimationFrame(tick);

  const dispose = () => {
    pause();
    document.removeEventListener("visibilitychange", onVisibility);
    geometry.dispose();
    material.dispose();
    renderer.dispose();
    if (canvas.parentElement === container) {
      container.removeChild(canvas);
    }
  };

  return { canvas, resize, setPointer, dispose, pause, resume };
}
