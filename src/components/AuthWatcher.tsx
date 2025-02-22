import { useEffect } from "react";
import { setAdminAuthToken, setAuthToken } from "store/authSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import { Screens } from "types/Screens";

const adminScreens: Screens[] = [
  Screens.OPERATION_SYSTEM_EXIT,
  Screens.OPERATION_SYSTEM_TABS,
];

export default function AuthWatcher() {
  const dispatch = useAppDispatch();
  const currentScreen = useAppSelector((state) => state.navigation.currentScreen);
  const adminToken = useAppSelector((state) => state.auth.adminToken);
  const userToken = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    if (!adminToken && !userToken) {
      return;
    }

    if (adminToken && !adminScreens.includes(currentScreen)) {
      dispatch(setAdminAuthToken(null));
    }

    if (userToken && currentScreen === Screens.WELCOME_SCREEN) {
      dispatch(setAuthToken(null));
    }
  },
    [dispatch, currentScreen, adminToken, userToken]);

  return null;
}
