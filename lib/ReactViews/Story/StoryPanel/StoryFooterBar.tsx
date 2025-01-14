import React from "react";
import { useTranslation } from "react-i18next";
import styled, { useTheme } from "styled-components";
import { constVoid } from "../../../Core/types";
import Box from "../../../Styled/Box";
import { RawButton } from "../../../Styled/Button";
import Icon from "../../../Styled/Icon";
import { StoryIcon } from "./StoryButtons";
import Text from "../../../Styled/Text";

interface FooterBarProps {
  goPrev: constVoid;
  goNext: constVoid;
  jumpToStory: (index: number) => void;
  zoomTo: constVoid;
  currentHumanIndex: number;
  totalStories: number;
  listStories: () => void;
}

const FooterButton = styled(RawButton)`
  display: flex;
  align-items: center;
  padding: 15px;
  gap: 5px;
`;

const NavigationButton = styled(RawButton)`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 15px 0;
  gap: 10px;
`;

const FooterBar = ({
  goPrev,
  goNext,
  jumpToStory,
  zoomTo,
  currentHumanIndex,
  totalStories,
  listStories
}: FooterBarProps) => {
  const isEnd = currentHumanIndex === totalStories;
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Box flex={1}>
        {totalStories > 1 && (
          <NavigationButton disabled={currentHumanIndex == 1} onClick={goPrev}>
            <StoryIcon
              displayInline
              styledWidth="15px"
              fillColor={theme.grey}
              glyph={Icon.GLYPHS.left}
            />
            <Text medium>{t("story.prev")}</Text>
          </NavigationButton>
        )}
      </Box>

      <Box flex={1} centered>
        <FooterButton onClick={listStories}>
          <StoryIcon
            displayInline
            styledWidth="15px"
            glyph={Icon.GLYPHS.menu}
            fillColor={theme.grey}
          />
        </FooterButton>
        <Box paddedRatio={3}>
          <Text>
            {currentHumanIndex} / {totalStories}
          </Text>
        </Box>

        <FooterButton onClick={zoomTo} title={t("story.locationBtn")}>
          <StoryIcon styledWidth={"16px"} glyph={Icon.GLYPHS.location} />
        </FooterButton>
      </Box>
      <Box flex={1} right>
        {totalStories > 1 && (
          <NavigationButton
            css={`
              justify-content: flex-end;
            `}
            onClick={isEnd ? () => jumpToStory(0) : goNext}
          >
            {isEnd ? (
              <>
                <Text>{t("story.restart")}</Text>
                <StoryIcon
                  displayInline
                  styledWidth="15px"
                  glyph={Icon.GLYPHS.revert}
                  fillColor={theme.grey}
                />
              </>
            ) : (
              <>
                <Text medium>{t("story.next")}</Text>
                <StoryIcon
                  displayInline
                  styledWidth="15px"
                  glyph={Icon.GLYPHS.right}
                  fillColor={theme.grey}
                />
              </>
            )}
          </NavigationButton>
        )}
      </Box>
    </>
  );
};

export default FooterBar;
