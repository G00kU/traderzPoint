import { Box, Button, Container } from "@mui/material";
import { NewsContainer } from "../components/newsContent";

export const HomePage = ({ }) => {
    return <>
        <>
            <Box sx={{ padding: 2 }} >
                <div>
                    <Container maxWidth="false">
                        <NewsContainer />
                    </Container>
                </div>
            </Box>
        </>
    </>
};
