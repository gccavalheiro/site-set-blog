import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
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

type AvatarImageProps = ImageProps & VariantProps<typeof avatarImageVariants>;

const avatarImageVariants = cva(
  "relative overflow-hidden rounded-full border-blue-200 border",
  {
    variants: {
      size: {
        xs: "h-5 w-5 min-w-5 min-h-5",
        sm: "h-9 w-9 min-w-9 min-h-9",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
);

function AvatarImage(props: AvatarImageProps) {
  const { src, alt, size = "xs", className, ...rest } = props;
  return (
    <div className={cn(avatarImageVariants({ size, className }))} {...rest}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

type AvatarTitleProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function AvatarTitle(props: AvatarTitleProps) {
  const { children, className, ...rest } = props;
  return (
    <p className={cn("text-body-sm text-gray-200", className)} {...rest}>
      {children}
    </p>
  );
}

export {
  AvatarContainer,
  AvatarContent,
  AvatarImage,
  AvatarDescription,
  AvatarTitle,
};
