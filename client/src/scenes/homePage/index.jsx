import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";

import {
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme
} from "@mui/material";
import {
  Search,
  DarkMode,
  LightMode,
  Menu,
  Close,
  Home,
  NotificationsActiveOutlined,
  Message,
  Face
} from "@mui/icons-material";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          {/* <UserWidget userId={_id} picturePath={picturePath} /> */}
          <Box>
          <IconButton>
              <Home /> 
              <Typography padding="12px" fontSize="24px">Home</Typography>
            </IconButton>
          </Box>
          <Box>
          <IconButton>
              <Search /> 
              <Typography padding="12px" fontSize="24px">Explore</Typography>
            </IconButton>
          </Box>
          <Box>
          <IconButton>
              <NotificationsActiveOutlined /> 
              <Typography padding="12px" fontSize="24px">Notifications</Typography>
            </IconButton>
          </Box>
          <Box>
          <IconButton>
              <Message /> 
              <Typography padding="12px" fontSize="24px">Message</Typography>
            </IconButton>
          </Box>
          <Box>
          <IconButton>
              <Face /> 
              <Typography padding="12px" fontSize="24px">Profile</Typography>
            </IconButton>
          </Box>
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
