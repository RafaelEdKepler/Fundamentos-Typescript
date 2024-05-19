import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean,
}

export function Avatar({ hasBorder = true, src, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatar : styles.avatarNoBorder}
      src={src}
      alt="Foto de perfil do usuário"
      {...props}
    />
  )
}