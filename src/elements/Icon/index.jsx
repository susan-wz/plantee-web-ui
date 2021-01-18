import StyledIcon from "./styles"
import {
  AddFilled,
  AddFromGallery,
  AddOutline,
  Back,
  Calendar,
  Check,
  Delay,
  Delete,
  DownArrow,
  Drop,
  Edit,
  Favourite,
  Fertilizer,
  Filter,
  Leaf,
  Lightbulb,
  Next,
  Previous,
  Repeat,
  Save,
  Search,
  Settings,
  Sort,
  TakePhoto,
  Tasks,
  UpArrow,
  Upload
} from "./svgs"

export default function Icon({ colour, symbol }) {
  const iconColour = colour ? colour : 'dark-neutral';
  const iconSymbol = symbol ? symbol : 'leaf'
  let iconSvg;

  switch (iconSymbol) {
    case "back":
      iconSvg = <Back />
      break
    case "addFilled":
      iconSvg = <AddFilled />
      break
    case "addOutline":
      iconSvg = <AddOutline />
      break
    case "drop":
      iconSvg = <Drop />
      break
    case "lightbulb":
      iconSvg = <Lightbulb />
      break
    case "delay":
      iconSvg = <Delay />
      break
    case "calendar":
      iconSvg = <Calendar />
      break
    case "edit":
      iconSvg = <Edit />
      break
    case "favourite":
      iconSvg = <Favourite />
      break
    case "sort":
      iconSvg = <Sort />
      break
    case "leaf":
      iconSvg = <Leaf />
      break
    case "addFromGallery":
      iconSvg = <AddFromGallery />
      break
    case "check":
      iconSvg = <Check />
      break
    case "delete":
      iconSvg = <Delete />
      break
    case "DownArrow":
      iconSvg = <DownArrow />
      break
    case "fertilizer":
      iconSvg = <Fertilizer />
      break
    case "filter":
      iconSvg = <Filter />
      break
    case "next":
      iconSvg = <Next />
      break
    case "previous":
      iconSvg = <Previous />
      break
    case "repeat":
      iconSvg = <Repeat />
      break
    case "save":
      iconSvg = <Save />
      break
    case "search":
      iconSvg = <Search />
      break
    case "settings":
      iconSvg = <Settings />
      break
    case "takePhoto":
      iconSvg = <TakePhoto />
      break
    case "tasks":
      iconSvg = <Tasks />
      break
    case "upArrow":
      iconSvg = <UpArrow />
      break
    case "upload":
      iconSvg = <Upload />
      break
    default:
      iconSvg = null
  }

  return (
    <StyledIcon>{iconSvg}</StyledIcon>
  );
}