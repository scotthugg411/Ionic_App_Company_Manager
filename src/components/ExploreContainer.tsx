import './ExploreContainer.css';

interface ContainerProps {
  name: string;
  message?: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name ,message}) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>{message}</p>
    </div>
  );
};

export default ExploreContainer;
