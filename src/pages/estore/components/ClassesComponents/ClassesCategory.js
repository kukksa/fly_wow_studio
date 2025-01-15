import dataClassesStore from "../../dataClassesStore";
import Class from "./Class";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../../redux/classesSlice";

const ClassesCategory = () => {

    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div className="container_type_of_products">
            {dataClassesStore
            .filter(type => {
                if (selectedCategory === 'ПОКАЗАТЬ ВСЁ') return true;
                return selectedCategory === type.category;
            })
            .map((type) => <Class type={type} key={type.id}/>)}
        </div>
    )
}

export default ClassesCategory;