import { ReactComponent as FeatureIcon1 } from "../Assets/Icon.svg";
import { ReactComponent as FeatureIcon2 } from "../Assets/Icon (1).svg";
import { ReactComponent as FeatureIcon3 } from "../Assets/Icon (2).svg";
import ClockIcon from "../Assets/Clock _.png";
import CameraIcon from "../Assets/Camera _.png";
import CoffeeIcon from "../Assets/- Coffee.png";
import SupportIcon from "../Assets/Chatbox _.png";

export const featuresListData = [
  {
    id: 1,

    icon: <FeatureIcon1 />,
    title: "Advanced pricing",
  },
  {
    id: 2,
    icon: <FeatureIcon2 />,

    title: "Relative positioning with containers",
  },
  {
    id: 3,
    icon: <FeatureIcon3 />,

    title: "Percentage-based geometry",
  },
];

export const plansCardData = [
  {
    id: 1,
    isHighlighted: true,
    userGroup: "Individual",
    title: "Professional",
    price: "$19.99",
    featureList: [
      "1 User",
      "2 TB of secure storage",
      "Premium productivity features and simple,secure file sharing",
    ],
    buttonColor: "white",
  },
  {
    id: 2,
    isHighlighted: false,
    userGroup: "Small Team",
    title: "Standard",
    price: "$29.99",

    featureList: [
      "3+ User",
      "5 TB of secure storage",
      "Premium productivity features and simple,secure file sharing",
    ],
    buttonColor: "pink",
  },
  {
    id: 3,
    isHighlighted: false,
    userGroup: "Large Team",
    title: "Ultimate",
    price: "$99.99",
    featureList: [
      "10+ User",
      "10 TB of secure storage",
      "Premium productivity features and simple,secure file sharing",
    ],
    buttonColor: "blue",
  },
];

export const objectivesListData = [
  {
    id: 1,
    isHighlighted: false,
    iconSrc: CameraIcon,
    title: "Assets Library",
    desc: "Get access to huge library of ready-made components and illustrations, free to use on all your projects.",
    expandText: "Learn more",
  },
  {
    id: 2,
    isHighlighted: true,
    iconSrc: ClockIcon,
    title: "Save Time",
    desc: "Save tons of time by eliminating repetitive day-to-day tasks and slow load times. ",
    expandText: "Learn more",
  },
  {
    id: 3,
    isHighlighted: false,
    iconSrc: CoffeeIcon,
    title: "Relax",
    desc: "Let your personalized Collab assistant do the heavy lifting while you focus on creating.Say good bye to code 👋",
    expandText: "Learn more ",
  },
  {
    id: 4,
    isHighlighted: false,
    iconSrc: SupportIcon,
    title: "Support",
    desc: "Got stuck or need any help?Our support team is online 24/7 to help assist you with any issues.",
    expandText: "Contact us ",
  },
];
