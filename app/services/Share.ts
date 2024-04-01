import { Share } from "react-native";

const SharePlace = (place: any) => {
  Share.share({
    title: "Paylaş",
    message: "Mekan adı: " + place?.name + "\n" + "Adres: " + place?.vicinity,
  });
};

export default {
  SharePlace,
};
