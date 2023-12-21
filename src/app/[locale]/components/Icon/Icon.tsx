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
  ContactPhone,
  ContactEmail,
  ContactLocation,
  ContactWhatsapp,
  ContactYoutube,
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
  ContactPhone,
  ContactEmail,
  ContactLocation,
  ContactWhatsapp,
  ContactYoutube,
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
      case eIcons.ContactPhone:
        return <ContactPhone />;
      case eIcons.ContactEmail:
        return <ContactEmail />;
      case eIcons.ContactLocation:
        return <ContactLocation />;
      case eIcons.ContactWhatsapp:
        return <ContactWhatsapp />;
      case eIcons.ContactYoutube:
        return <ContactYoutube />;
    }
  };
  
  return <div className={styles.icon + " " + className}>{renderIcon()}</div>;
};
