import { Paper, IconButton } from '@mui/material'
import { useState } from 'react'
import { colors } from "../../constants/colors"
import { Search } from "@mui/icons-material"
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (value.trim().length) {
            navigate(`/search/${value}`)
        }
    }

    return (
        <Paper component={"form"}
            onSubmit={submitHandler}
            sx={{
                mr: "5px",
                display: "flex",
                borderRadius: "40px",
                border: `1px solid ${colors.primary}`,
                boxShadow: "none",
                background: "transparent"
            }}>
            <input type="text" placeholder='Search...' className='search_bar' style={{ background: "transparent", color: colors.primary }} value={value} onChange={e => setValue(e.target.value)} />
            <IconButton type='submit' sx={{ color: colors.primary }} >
                <Search />
            </IconButton>
        </Paper>
    )
}

export default Searchbar
