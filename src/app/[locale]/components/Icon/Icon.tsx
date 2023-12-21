import {
  ArrowDownIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  DonationIcon,
  HandsIcon,
  HoursIcon,
  InstitutionIcon,
  SocialFacebook,
  SocialInstagram,
  SocialYoutube,
  SocialLinkedIn,
  SocialX,
  TherapyIcon,
  UsersIcon,
  QuoteIcon,
  WeightIcon,
  WomanIcon,
  ContactFacebook,
} from "./icons";

import styles from "./Icon.module.scss";

export enum eIcons {
  arrowDown,
  arrowRight,
  chevronDown,
  donation,
  hands,
  hours,
  socialFacebook,
  socialInstagram,
  socialYoutube,
  socialLinkedIn,
  socialX,
  therapy,
  institution,
  users,
  quote,
  weight,
  woman,
  ContactFacebook,
}

export const Icon = ({
  icon,
  className,
}: {
  icon: eIcons;
  className?: string;
}) => {
  const renderIcon = () => {
    switch (icon) {
      case eIcons.arrowDown:
        return <ArrowDownIcon />;
      case eIcons.arrowRight:
        return <ArrowRightIcon />;
      case eIcons.chevronDown:
        return <ChevronDownIcon />;
      case eIcons.donation:
        return <DonationIcon />;
      case eIcons.hands:
        return <HandsIcon />;
      case eIcons.hours:
        return <HoursIcon />;
      case eIcons.institution:
        return <InstitutionIcon />;
      case eIcons.socialFacebook:
        return <SocialFacebook />;
      case eIcons.socialInstagram:
        return <SocialInstagram />;
      case eIcons.socialLinkedIn:
        return <SocialLinkedIn />;
      case eIcons.socialYoutube:
        return <SocialYoutube />;
      case eIcons.socialX:
        return <SocialX />;
      case eIcons.therapy:
        return <TherapyIcon />;
      case eIcons.users:
        return <UsersIcon />;
      case eIcons.quote:
        return <QuoteIcon />;
      case eIcons.weight:
        return <WeightIcon />;
      case eIcons.woman:
        return <WomanIcon />;
      case eIcons.ContactFacebook:
        return <ContactFacebook />;
    }
  };

  return <div className={styles.icon + " " + className}>{renderIcon()}</div>;
};
