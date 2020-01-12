import React from "react";
import cn from "classnames";
import { Container, Body, Title, Text, Image, Button } from "./styles/Card";

const Card = ({ className, classes, children, ...restProps }) => {
  return (
    <Container className={cn("card", className, classes)} {...restProps}>
      {children}
    </Container>
  );
};

Card.Body = ({ className, classes, children, ...restProps }) => {
  return (
    <Body className={cn("card__body", className, classes)} {...restProps}>
      {children}
    </Body>
  );
};

Card.Title = ({ className, classes, children, ...restProps }) => {
  return (
    <Title className={cn("card__body", className, classes)} {...restProps}>
      {children}
    </Title>
  );
};

Card.Text = ({ className, classes, children, ...restProps }) => {
  return (
    <Text className={cn("card__text", className, classes)} {...restProps}>
      {children}
    </Text>
  );
};

Card.Image = ({ src, alt, className, classes, children, ...restProps }) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={cn("card__image", className, classes)}
      {...restProps}
    >
      {children}
    </Image>
  );
};

Card.Button = ({ className, classes, children, ...restProps }) => {
  return (
    <Button
      type="button"
      className={cn("card__button", className, classes)}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default Card;
