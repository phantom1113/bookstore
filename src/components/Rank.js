import React from 'react'
import { List, Image } from 'semantic-ui-react'




export default class Rank extends React.Component {
    render(){
        return(
            <List relaxed>
                <h4><u>Sách bán chạy trong tuần</u></h4>
                <List.Item>
                    <Image src='https://www.vinabook.com/images/thumbnails/product/50x/340352_combo-ma-dao-to-su-bo-2-tap-phien-ban-thuong.jpg' />
                    <List.Content>
                        <List.Header as='a'>Ma đạo tổ sư</List.Header>
                        <List.Description as='a'>214.000đ</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Image src='https://www.vinabook.com/images/thumbnails/product/50x/341481_phong-cach-harpers-bazaar-thang-72019.jpg' />
                    <List.Content>
                        <List.Header as='a'>Phong Cách - Harper's Bazaar</List.Header>
                        <List.Description as='a'>55.000đ</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Image src='https://www.vinabook.com/images/thumbnails/product/50x/338526_bo-sach-giao-khoa-lop-10-2019-bai-hoc-bo-14-cuon.jpg' />
                    <List.Content>
                        <List.Header as='a'>Bộ sách giáo khoa lớp 10</List.Header>
                        <List.Description as='a'>156.000đ</List.Description>
                    </List.Content>
                </List.Item>
            </List>
        )
    }
}

