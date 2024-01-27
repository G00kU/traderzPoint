import axios from 'axios';
import { useState } from 'react';
import { Button, Box, Container, Typography } from '@mui/material';
import { tradingViewNewsColumns, getTradingViewNews } from '../rapidAPI/tradingView/news';
import { DataGrid, GridOverlay } from '@mui/x-data-grid';
import { CustomLoadingOverlay } from '../utils/muiDataGridLoader';
import { forexFactoryAPI } from '../apiConfig';
import RefreshIcon from '@mui/icons-material/Refresh';
import { newsData } from '../staticDataForTesting';



export const NewsContainer = () => {
    const [news, setNews] = useState([]);
    const getLatestNews = async () => {
        try {
            const response = await axios.request(getTradingViewNews);
            console.log(response.data);
            setNews(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    return <>
        <Box sx={{ width: '100%' }}>
            <Typography variant='h4' fontFamily={'Bebas Neue'} color={'red'} textAlign={"center"}>Latest News<span className='cursorHand' onClick={() => { getLatestNews() }}>
                <RefreshIcon fontSize='large' />
            </span>
            </Typography>
            <Typography textAlign={"right"}><a href={forexFactoryAPI} target='_blank'>For More News Click Here</a></Typography>
            <DataGrid
                autoHeight
                sx={{
                    minHeight: '400px',
                }}
                loading={news.length === 0}
                rows={news}
                columns={tradingViewNewsColumns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                onRowClick={(e) => { console.log(e, 'This is row'); }}
                pageSizeOptions={[10]}
                components={{
                    LoadingOverlay: CustomLoadingOverlay
                }}
            />
        </Box >
    </>
};

