import clsx from "clsx";
import { useMediaQuery } from "../../../hooks";
import type { ComponentPropsWithoutRef } from "react";
import { AnchorOrButton, type AnchorOrButtonProps } from "../../../utils";
import "./cards.css";

export type CardProps = ComponentPropsWithoutRef<"div"> & {
  /**
   * The alignment of the card content.
   */
  align?: "start" | "center" | "end";
  /**
   * The initial direction of the card.
   * All cards become vertical on mobile.
   */
  direction?: "horizontal" | "vertical";
  /**
   * The interaction props for the Card.
   * If present, the card itself is pressable.
   * AnchorOrButtonProps extend either button or anchor behavior.
   */
  interactionProps?: AnchorOrButtonProps;
  /**
   * An asset for the card.
   * Can be an Icon or an Image instance.
   */
  asset?: React.ReactNode;
  /**
   * Padding can be none, 600, or 800
   */
  padding?: "600" | "800";
  /**
   * Style variation of the card.
   */
  variant?: "default" | "stroke" | "brand";
};

/**
 * The basic card generic component that can be used to create vanity card components.
 */
export function Card({
  align = "start",
  children,
  className,
  direction = "vertical",
  interactionProps,
  variant = "default",
  asset,
  padding,
  ...props
}: CardProps) {
  const { isMobile } = useMediaQuery();
  const classNames = clsx(
    className,
    "card",
    `card-align-${align}`,
    `card-direction-${isMobile ? "vertical" : direction}`,
    `card-padding-${padding ? padding : "0"}`,
    `card-variant-${variant}`,
  );
  return (
    <div className={classNames} {...props}>
      {asset && <div className="card-asset">{asset}</div>}
      <div className="card-content">{children}</div>
      {interactionProps && (
        <AnchorOrButton className="card-interaction" {...interactionProps} />
      )}
    </div>
  );
}

export type PricingCardProps = CardProps & {
  heading: string;
  price: string;
  priceCurrency: string;
  priceLabel?: string;
  interval?: string;
  action?: string;
  onAction?: () => void;
  actionVariant?: "default" | "brand" | "neutral" | "stroke";
  actionIcon?: React.ReactNode;
  list?: string[];
  listSlot?: React.ReactNode;
  sku?: string;
  size?: "small" | "large";
};

export function PricingCard({
  heading,
  price,
  priceCurrency,
  priceLabel,
  interval,
  action,
  onAction,
  actionVariant = "brand",
  actionIcon,
  list,
  listSlot,
  sku,
  size = "large",
  ...props
}: PricingCardProps) {
  return (
    <Card {...props} className={clsx("pricing-card", props.className)}>
      <div className="pricing-card-header">
        <h3>{heading}</h3>
        <div className="pricing-card-price">
          <span className="currency">{priceCurrency}</span>
          <span className="amount">{price}</span>
          {interval && <span className="interval">/{interval}</span>}
        </div>
        {priceLabel && <div className="price-label">{priceLabel}</div>}
      </div>
      <div className="pricing-card-content">
        {listSlot || (list && (
          <ul className="text-list">
            {list.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        ))}
      </div>
      {action && (
        <div className="pricing-card-footer">
          <button onClick={onAction} className={clsx("button", `button-variant-${actionVariant}`)}>
            {actionIcon}
            {action}
          </button>
        </div>
      )}
    </Card>
  );
}

export type ProductInfoCardProps = CardProps & {
  heading: string;
  price: string;
  rating?: number;
  description?: string;
};

export function ProductInfoCard({
  heading,
  price,
  rating,
  description,
  ...props
}: ProductInfoCardProps) {
  return (
    <Card {...props} className={clsx("product-info-card", props.className)}>
      <div className="product-info-header">
        <h4>{heading}</h4>
        <div className="product-price">{price}</div>
      </div>
      {rating !== undefined && <div className="product-rating">Rating: {rating}</div>}
      {description && <p className="product-description">{description}</p>}
    </Card>
  );
}

export type ReviewCardProps = CardProps & {
  stars: number;
  title: string;
  body: string;
  name: string;
  date: string;
  src?: string;
};

export function ReviewCard({
  stars,
  title,
  body,
  name,
  date,
  src,
  ...props
}: ReviewCardProps) {
  return (
    <Card {...props} className={clsx("review-card", props.className)}>
      <div className="review-stars">{"★".repeat(stars)}{"☆".repeat(5 - stars)}</div>
      <div className="review-content">
        <h5>{title}</h5>
        <p>{body}</p>
      </div>
      <div className="review-footer">
        {src && <img src={src} alt={name} className="avatar" />}
        <div className="review-meta">
          <span className="name">{name}</span>
          <span className="date">{date}</span>
        </div>
      </div>
    </Card>
  );
}

export type StatsCardProps = CardProps & {
  icon?: React.ReactNode;
  stat: string;
  description: string;
};

export function StatsCard({
  icon,
  stat,
  description,
  ...props
}: StatsCardProps) {
  return (
    <Card {...props} className={clsx("stats-card", props.className)}>
      {icon && <div className="stats-icon">{icon}</div>}
      <div className="stats-content">
        <div className="stats-value">{stat}</div>
        <div className="stats-description">{description}</div>
      </div>
    </Card>
  );
}

export type TestimonialCardProps = CardProps & {
  heading: string;
  src?: string;
  username: string;
  name: string;
};

export function TestimonialCard({
  heading,
  src,
  username,
  name,
  ...props
}: TestimonialCardProps) {
  return (
    <Card {...props} className={clsx("testimonial-card", props.className)}>
      <blockquote className="testimonial-quote">{heading}</blockquote>
      <div className="testimonial-footer">
        {src && <img src={src} alt={name} className="avatar" />}
        <div className="testimonial-meta">
          <span className="name">{name}</span>
          <span className="username">@{username}</span>
        </div>
      </div>
    </Card>
  );
}

