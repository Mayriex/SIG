import React from 'react'; 
import '../styles/Profile.css'
import Menu from '../components/Menu';
import { Card, Avatar, Descriptions, Button } from 'antd';
import { UserOutlined, LogoutOutlined,EditOutlined, MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';

function Profile() {
 return (
        <><><div className='profile'>
 <div className="profile-container">
            <Card
                actions={[
                    <><Button type="primary" ghost icon={<EditOutlined />}>Editar</Button>
                    <Button danger icon={<LogoutOutlined />}> Cerrar Sesión</Button></>
                ]}
            >
                <Card.Meta
                    avatar={<Avatar size={64} icon={<UserOutlined />} />}
                    title="May Medina"
                    description="may@gmail.com"
                />
            </Card>
            <Descriptions title="User Info" bordered style={{ marginTop: 20 }}>
            <Descriptions.Item label={<><UserOutlined /> </>}>may_m</Descriptions.Item>
                <Descriptions.Item label={<><MailOutlined /> </>}>may@gmail.com</Descriptions.Item>
                <Descriptions.Item label={<><PhoneOutlined /> </>}>+1 234 567 890</Descriptions.Item>
            </Descriptions>
        </div>
     </div></><Menu></Menu></>
 );
}
export default Profile;