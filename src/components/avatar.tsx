export default function({ size, radius, border, src, alt }: {
  size: number,
  radius: number,
  border: {
    color: string,
    weight: number
  },
  src: string,
  alt: string
}) {
  return (
    <div className='avatar' style={{ width: size - border.weight, height: size - border.weight, borderRadius: `${radius}%`, border: `${border.weight}px solid ${border.color}`, padding: border.weight}}>
      <img src={src} alt={alt} style={{ width: size - border.weight, height: size - border.weight, borderRadius: `${radius}%` }}/>
    </div>
  )
}