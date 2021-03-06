import { Headline, Subheading } from "react-native-paper";
import { View } from "react-native";
import React from "react";
import styled from "styled-components/native";

type PanelHeaderProps = {
  title: string;
  subtitle?: string;
};

const Header = styled(Headline)`
  text-align: center;
`;

const SubHeader = styled(Subheading)`
  text-align: center;
`;

const PanelHeader = ({ title, subtitle }: PanelHeaderProps) => {
  return (
    <View>
      <Header>{title}</Header>
      <SubHeader>{subtitle || ""}</SubHeader>
    </View>
  );
};

PanelHeader.defaultProps = {
  subtitle: "",
};

export default PanelHeader;
