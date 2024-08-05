import { Stack } from '@mui/material'
import { category } from "../../constants/const"
import { colors } from '../../constants/colors'


export default function Catergory({ titleHandler, title }) {
  return (
   <Stack px={4}>
     <Stack direction={"row"}  sx={{ maxWidth:"1460px", overflowX: "auto" }}>
      {category.map(item => (
        <button key={item.name} className='catergory_btn' style={{ borderRadius: "10px", background: item.name === title && colors.primary, color: item.name === title  ? colors.body : colors.primary, }} onClick={() => titleHandler(item.name)}>
          <span style={{ color: item.name === title  ? colors.body : colors.primary, marginRight: "15px" }}>{item.icon}</span>
          <span style={{ opacity: 1 }}>{item.name}</span>
        </button>
      ))}
    </Stack>
   </Stack>
  )
}
