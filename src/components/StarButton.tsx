import { Button } from "antd";
import { StarFilled, StarOutlined } from '@ant-design/icons';

const StarButton = ({ isFavorite, onClick }: any): JSX.Element => {
    const Icon = isFavorite ? <StarFilled /> : <StarOutlined />;
    return <Button icon={Icon} onClick={onClick} />;
};

export { StarButton };