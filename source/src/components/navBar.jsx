import * as React from 'react';
import { AppBar, Button, Toolbar, Typography, Box } from '@mui/material';
import { TPflexGrow, width, dFlexColumn } from '../utils/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';

export const Navbar = ({ userName }) => {

    return (
        <>
            <AppBar position="static" sx={{ minHeight: '100px', margin: 0 }}>
                <Toolbar sx={{ ...TPflexGrow(1) }} >
                    <Box  >
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                alignItems: 'center'
                            }}
                        >
                            Traderz Point
                        </Typography>
                    </Box>
                </Toolbar>

            </AppBar >
        </>
    );
}