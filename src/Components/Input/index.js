import React from "react";

import { Container, Title, InputText, TextError } from "./styles";

const Input = ({
  title,
  marginTop,
  marginLeft,
  placeholder,
  secureTextEntry,
  keyboardType,
  error,
  touched,
  onChangeText,
  value,
  onSubmitEditing,
  onBlur,
  autoCapitalize,
  autoComplete,
  widthContainer,
  colorTitle,
  fontFamily,
  widthInput,
}) => (
  <Container
    marginTop={marginTop}
    marginLeft={marginLeft}
    widthContainer={widthContainer}
  >
    <Title colorTitle={colorTitle} fontFamily={fontFamily}>{title}</Title>
    <InputText
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      error={error}
      touched={touched}
      onChangeText={onChangeText}
      value={value}
      onSubmitEditing={onSubmitEditing}
      onBlur={onBlur}
      autoCapitalize={autoCapitalize}
      autoComplete={autoComplete}
      widthInput={widthInput}
    />
    {error && touched && <TextError>{error}</TextError>}
  </Container>
);

export default Input;
