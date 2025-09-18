// src/hooks/useVantaEffect.ts
import { useEffect, useRef } from "react";

declare global {
	interface Window {
		VANTA: any;
		THREE: any;
	}
}

export const useVantaEffect = () => {
	const vantaRef = useRef<HTMLDivElement>(null);
	const vantaEffect = useRef<any>(null);

	useEffect(() => {
		if (!vantaRef.current) return;

		const loadScript = (src: string) =>
			new Promise<void>((resolve, reject) => {
				const existing = document.querySelector(`script[src="${src}"]`);
				if (existing) {
					resolve();
					return;
				}
				const script = document.createElement("script");
				script.src = src;
				script.async = true;
				script.onload = () => resolve();
				script.onerror = () => reject();
				document.head.appendChild(script);
			});

		const initVanta = async () => {
			try {
				// Ensure THREE is loaded first
				await loadScript(
					"https://cdn.jsdelivr.net/npm/three@0.144.0/build/three.min.js"
				);
				await loadScript(
					"https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js"
				);

				if (window.VANTA && window.VANTA.GLOBE) {
					if (vantaEffect.current) vantaEffect.current.destroy();

					vantaEffect.current = window.VANTA.GLOBE({
						el: vantaRef.current,
						mouseControls: true,
						touchControls: true,
						gyroControls: false,
						minHeight: 200.0,
						minWidth: 200.0,
						scale: 1.0,
						scaleMobile: 1.0,
						color: 0x5e35b1,
						backgroundColor: 0x0,
					});
				}
			} catch (err) {
				console.error("[VANTA] Init failed:", err);
			}
		};

		initVanta();

		return () => {
			if (vantaEffect.current) {
				vantaEffect.current.destroy();
			}
		};
	}, []);

	return vantaRef;
};
