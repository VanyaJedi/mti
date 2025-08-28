import * as React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  title?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
};

export const asIcon = (
  SvgContent: React.ComponentType<{ color: string }>,
  defaultSize: { width: number; height: number } = { width: 24, height: 24 }
) => {
  const Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ title, color = "currentColor", width, height, ...props }, ref) => {
      return (
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${defaultSize.width} ${defaultSize.height}`}
          width={width ?? defaultSize.width}
          height={height ?? defaultSize.height}
          fill="none"
          role="img"
          aria-label={title}
          aria-hidden={title ? undefined : true}
          {...props}
        >
          <SvgContent color={color} />
        </svg>
      );
    }
  );

  Icon.displayName = "Icon";
  return Icon;
}
