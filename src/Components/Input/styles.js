import styled from "styled-components/native";

export const Container = styled.View`
  width: ${(props) => props.widthContainer}px;
  max-height: 72px;
  flex: 1;
  align-self: center;
  align-items: flex-start;
  margin-top: ${(props) => props.marginTop}px;
  margin-left: ${(props) => props.marginLeft}px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.colorTitle};
  font-family: ${(props) => props.fontFamily};
  margin-bottom: 5px;
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: "rgba(0, 0, 0, 0.5)",
  selectionColor: "blue",
})`
  width: ${(props) => props.widthInput}px;
  height: 54px;
  background-color: white;
  border-radius: 3.5px;
  padding-left: 20px;
`;

export const TextError = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: red;
  align-self: flex-start;
`;