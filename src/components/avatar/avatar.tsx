import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

type AvatarContainerProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function AvatarContainer(props: AvatarContainerProps) {
  const { children, className, ...rest } = props;
  return (
    <div className={cn("flex items-center gap-3", className)} {...rest}>
      {children}
    </div>
  );
}

type AvatarContentProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function AvatarContent(props: AvatarContentProps) {
  const { children, className, ...rest } = props;
  return (
    <div className={cn("flex flex-col", className)} {...rest}>
      {children}
    </div>
  );
}

type AvatarDescriptionProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function AvatarDescription(props: AvatarDescriptionProps) {
  const { children, className, ...rest } = props;
  return (
    <div className={cn("text-gray-300 text-body-xs", className)} {...rest}>
      {children}
    </div>
  );
}

type AvatarImageProps = ImageProps;

function AvatarImage(props: AvatarImageProps) {
  const { src, alt, width = 40, height = 40, ...rest } = props;
  return <Image src={src} alt={alt} width={width} height={height} {...rest} />;
}

type AvatarTitleProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function AvatarTitle(props: AvatarTitleProps) {
  const { children, className, ...rest } = props;
  return (
    <strong className={cn("text-body-sm text-gray-200", className)} {...rest}>
      {children}
    </strong>
  );
}

export {
  AvatarContainer,
  AvatarContent,
  AvatarImage,
  AvatarDescription,
  AvatarTitle,
};
