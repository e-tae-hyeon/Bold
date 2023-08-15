import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import InAppReview from 'react-native-in-app-review';

function useReview() {
  const {getItem, setItem} = useAsyncStorage('in_APP_Review');

  const requestReview = async () => {
    if (!InAppReview.isAvailable()) return;

    const lastDateAppReviewed = await getItem();

    if (lastDateAppReviewed !== null) {
      let Today = new Date();
      const leftTime = Math.abs(
        Today.getTime() - new Date(lastDateAppReviewed).getTime(),
      );
      let leftDays = Math.ceil(leftTime / (1000 * 60 * 60 * 24));

      if (leftDays >= 7) {
        await setItem(new Date().toString());
        InAppReview.RequestInAppReview();
      }
    } else {
      await setItem(new Date().toString());
      InAppReview.RequestInAppReview();
    }
  };

  return {
    requestReview,
  };
}

export default useReview;
