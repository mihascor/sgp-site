type Props = {
  children: React.ReactNode
  className?: string
}
// Ширина контейнера
import styles from "./Container.module.css"

export const Container = ({ children, className = "" }: Props) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>
}