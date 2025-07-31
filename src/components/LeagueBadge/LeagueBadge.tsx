import { useState } from "react";
import {BadgeContainer, BadgeContainerWithBackground, BadgeImage, BadgePlaceholder} from "./styled.ts";
import type {LeagueBadgeProps} from "./types.ts";

export default function LeagueBadge ({ badgeUrl, isLoading, leagueName }: LeagueBadgeProps) {
  const [hasError, setHasError] = useState(false);

  const content = (() => {
    if(isLoading) {
      return '...'
    }

    if(!badgeUrl || hasError) {
      return '?';
    }
  })();

  if (isLoading || !badgeUrl || hasError) {
    return (
      <BadgeContainerWithBackground>
        <BadgePlaceholder>{content}</BadgePlaceholder>
      </BadgeContainerWithBackground>
    );
  }

  return (
    <BadgeContainer>
      <BadgeImage
        src={badgeUrl}
        alt={`${leagueName} badge`}
        onError={() => setHasError(true)}
      />
    </BadgeContainer>
  );
};

LeagueBadge.displayName = "LeagueBadge";

