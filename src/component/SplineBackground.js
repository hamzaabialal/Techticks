import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function BackgroundStars({ count = 3000, radius = 6 }) {
	const ref = useRef()
	const isHovering = useRef(false) // ✅ added

	const positions = useMemo(() => {
		const arr = new Float32Array(count * 3)
		for (let i = 0; i < count; i++) {
			const theta = Math.random() * Math.PI * 2
			const phi = Math.acos(2 * Math.random() - 1)
			const r = radius * Math.cbrt(Math.random())

			arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
			arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
			arr[i * 3 + 2] = r * Math.cos(phi)
		}
		return arr
	}, [count, radius])

	const targetMouse = useRef(new THREE.Vector3())

	useFrame((state) => {
		const { pointer } = state
		if (!ref.current) return

		// 🔥 rotate whole sphere instead of mutating geometry
		ref.current.rotation.y += 0.001

		const posArray = ref.current.geometry.attributes.position.array

		if (isHovering.current) {
			targetMouse.current.set(
				THREE.MathUtils.clamp(pointer.x * radius, -radius, radius),
				THREE.MathUtils.clamp(pointer.y * radius, -radius, radius),
				0,
			)

			for (let i = 0; i < count; i++) {
				const ix = i * 3
				const iy = i * 3 + 1
				const iz = i * 3 + 2

				const dx = posArray[ix] - targetMouse.current.x
				const dy = posArray[iy] - targetMouse.current.y
				const dz = posArray[iz] - targetMouse.current.z
				const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

				const force = Math.min(0.05 / (dist * dist + 0.001), 0.02)

				posArray[ix] += dx * force
				posArray[iy] += dy * force
				posArray[iz] += dz * force
			}

			ref.current.geometry.attributes.position.needsUpdate = true
		}
	})

	return (
		<points
			ref={ref}
			onPointerOver={() => (isHovering.current = true)}
			onPointerOut={() => (isHovering.current = false)}>
			<bufferGeometry>
				<bufferAttribute
					attach='attributes-position'
					array={positions}
					count={count}
					itemSize={3}
				/>
			</bufferGeometry>
			<pointsMaterial
				color='#ffffff'
				size={0.06}
				sizeAttenuation
				transparent
				opacity={0.7}
			/>
		</points>
	)
}

/** tiny stars for bg  */
function SideTinyStars({ count = 2500 }) {
	const ref = useRef()
	const targetMouse = useRef(new THREE.Vector3())
	const isHovering = useRef(false)

	// store base positions separately (important)
	const basePositions = useMemo(() => {
		const arr = new Float32Array(count * 3)

		for (let i = 0; i < count; i++) {
			arr[i * 3] = (Math.random() - 0.5) * 30 // full width
			arr[i * 3 + 1] = (Math.random() - 0.5) * 18 // full height
			arr[i * 3 + 2] = (Math.random() - 0.5) * 20 // depth
		}
		return arr
	}, [count])

	const positions = useMemo(
		() => new Float32Array(basePositions),
		[basePositions],
	)

	useFrame((state) => {
		if (!ref.current) return
		const { clock, pointer } = state
		const t = clock.getElapsedTime()
		const posArray = ref.current.geometry.attributes.position.array

		// 🌫️ soft floating movement (NO rotation)
		for (let i = 0; i < count; i++) {
			const ix = i * 3
			const iy = i * 3 + 1
			const iz = i * 3 + 2

			posArray[ix] = basePositions[ix] + Math.sin(t + ix) * 0.05
			posArray[iy] = basePositions[iy] + Math.cos(t + iy) * 0.05
			posArray[iz] = basePositions[iz]
		}

		//  hover repulsion
		if (isHovering.current) {
			targetMouse.current.set(pointer.x * 10, pointer.y * 6, 0)

			for (let i = 0; i < count; i++) {
				const ix = i * 3
				const iy = i * 3 + 1
				const iz = i * 3 + 2

				const dx = posArray[ix] - targetMouse.current.x
				const dy = posArray[iy] - targetMouse.current.y
				const dz = posArray[iz] - targetMouse.current.z
				const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

				const force = Math.min(0.02 / (dist * dist + 0.001), 0.01)

				posArray[ix] += dx * force
				posArray[iy] += dy * force
				posArray[iz] += dz * force
			}
		}

		ref.current.geometry.attributes.position.needsUpdate = true
	})

	return (
		<points
			ref={ref}
			onPointerOver={() => (isHovering.current = true)}
			onPointerOut={() => (isHovering.current = false)}>
			<bufferGeometry>
				<bufferAttribute
					attach='attributes-position'
					array={positions}
					count={count}
					itemSize={3}
				/>
			</bufferGeometry>

			<pointsMaterial
				color='#ffffff'
				size={0.02}
				sizeAttenuation
				transparent
				opacity={0.35}
				depthWrite={false}
			/>
		</points>
	)
}

export default function EnhancedParticlesLikeSpline() {
	return (
		<Canvas
			camera={{ position: [0, 0, 14], fov: 60 }}
			style={{
				position: 'absolute',
				inset: 0,
				zIndex: 0,
				pointerEvents: 'auto',
			}}>
			<color
				attach='background'
				args={['#000000']}
			/>
			<BackgroundStars
				count={4000}
				radius={6}
			/>
			<SideTinyStars count={150} />
		</Canvas>
	)
}
