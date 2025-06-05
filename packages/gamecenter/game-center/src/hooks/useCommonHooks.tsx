// hooks/useCommonHooks.ts (veya CommonHooks.ts olarak da bırakabilirsiniz, önemli olan return etmesi)
import { useCallback, useState } from "react";

// Hook'un dışarıya ne döndüreceğini tanımlayan arayüz (TypeScript için)
interface UseCommonHooksResult {
  lobbyName: string;
  setLobbyName: React.Dispatch<React.SetStateAction<string>>;
  lobbyStatus: string;
  setLobbyStatus: React.Dispatch<React.SetStateAction<string>>;
  isMainModalVisible: boolean;
  setIsMainModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  startDate: Date | undefined;
  setStartDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  endDate: Date | undefined;
  setEndDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  isTimePickerVisible: boolean;
  setIsTimePickerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTime: { hours: number; minutes: number } | undefined;
  setSelectedTime: React.Dispatch<React.SetStateAction<{ hours: number; minutes: number } | undefined>>;
  onDismissTimePicker: () => void;
  onConfirmTimePicker: ({ hours, minutes }: { hours: number; minutes: number }) => void;
  handleActivityButtonPress: () => void;
  selectedItems: number[];
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
  handleDoneButtonPress: () => void;
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  visible: boolean;
  showModal: () => void;
  hideModal: () => void;
}

// CommonHooks fonksiyonunu bir custom hook olarak tanımlıyoruz
export const useCommonHooks = (): UseCommonHooksResult => { // Fonksiyon adını 'use' ile başlattık
  const [lobbyName, setLobbyName] = useState('My Awesome Lobby');
  const [lobbyStatus, setLobbyStatus] = useState('');

  const [isMainModalVisible, setIsMainModalVisible] = useState(false);

  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState<{ hours: number; minutes: number } | undefined>(undefined);

  const onDismissTimePicker = useCallback(() => {
    setIsTimePickerVisible(false);
  }, []);

  const onConfirmTimePicker = useCallback(
    ({ hours, minutes }: { hours: number; minutes: number }) => {
      setSelectedTime({ hours, minutes });
      setIsTimePickerVisible(false);
      console.log('Seçilen Saat:', { hours, minutes });
    },
    [setSelectedTime]
  );

  const handleActivityButtonPress = useCallback(() => {
    setIsMainModalVisible(true);
  }, []);

  const [selectedItems, setSelectedItems] = useState<number[]>([1]);
  // console.log('Selected:', selectedItems); // Bu logu burada tutmak yerine, ihtiyacınız olan bileşende yapabilirsiniz.

  const handleDoneButtonPress = useCallback(() => {
    setIsMainModalVisible(false);
    console.log("Son Seçim - Başlangıç Tarihi:", startDate, "Bitiş Tarihi:", endDate, "Saat:", selectedTime);
  }, [startDate, endDate, selectedTime]); // Bağımlılıkları eklemeyi unutmayın!

  const [country, setCountry] = useState('1');

  const [visible, setVisible] = useState(false);
  const showModal = useCallback(() => setVisible(true), []);
  const hideModal = useCallback(() => setVisible(false), []);

  // Tüm state'leri ve fonksiyonları return ediyoruz ki dışarıdan erişilebilsin.
  return {
    lobbyName,
    setLobbyName,
    lobbyStatus,
    setLobbyStatus,
    isMainModalVisible,
    setIsMainModalVisible,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    isTimePickerVisible,
    setIsTimePickerVisible,
    selectedTime,
    setSelectedTime,
    onDismissTimePicker,
    onConfirmTimePicker,
    handleActivityButtonPress,
    selectedItems,
    setSelectedItems,
    handleDoneButtonPress,
    country,
    setCountry,
    visible,
    showModal,
    hideModal,
  };
};

