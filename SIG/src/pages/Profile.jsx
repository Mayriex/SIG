import React from 'react'; 
import '../styles/Profile.css'
import Menu from '../components/Menu';
import { Card, Avatar, Descriptions, Button } from 'antd';
import { UserOutlined, LogoutOutlined,EditOutlined, MailOutlined, PhoneOutlined} from '@ant-design/icons';

function Profile() {
 return (
        <><><div className='profile'>
 <div className="profile-container">
            <Card
                actions={[
                    <><Button  icon={<EditOutlined />}>Editar</Button>
                    <Button danger icon={<LogoutOutlined />}> Cerrar Sesión</Button></>
                ]}
            >
                <Card.Meta
                    avatar={<Avatar size={64} icon={<UserOutlined />} />}
                    title="May Medina"
                    description="may@gmail.com"
                />

                <Descriptions  style={{ marginTop: 20 }}>
                    <Descriptions.Item label={<><UserOutlined  style={{ marginRight:10, marginLeft:20 }}/>Usuario </>}>may_m</Descriptions.Item>
                    <Descriptions.Item label={<><MailOutlined  style={{ marginRight:10,  marginLeft:20 }}/> Email</>}>may@gmail.com</Descriptions.Item>
                    <Descriptions.Item label={<><PhoneOutlined style={{ marginRight:10,  marginLeft:20 }}/> Teléfono</>}>+1 234 567 890</Descriptions.Item>
                    <Descriptions.Item label={<><UserOutlined style={{ marginRight:10,  marginLeft:20 }}/> Edad</>}>90</Descriptions.Item>

                </Descriptions>
            </Card>
        </div>
     </div></><Menu></Menu></>
 );
}
export default Profile;