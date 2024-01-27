import { Box } from "@chakra-ui/layout";
import { ChatState } from "../Context/ChatProvider";
import MyChats from "../Components/MyChats";
import ChatBox from "../Components/ChatBox";
import SideDrawer from "../Components/miscellaneous/SideDrawer";

const ChatPage = () => {
  const { user } = ChatState();

  
  return (
    <div style={{ width: "100%" }}> 
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5 vh"
        p="10px"
      >
        {user && <MyChats />}
        {user && <ChatBox />}
        </Box>
    </div>
  );
};

export default ChatPage
