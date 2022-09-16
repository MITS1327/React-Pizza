import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizza from "../components/Pizza";
import Skeleton from "../components/Skeleton";
import React from "react";
import Pagination from "../components/Pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from '../redux/slices/filterSlice';


function Home () {
    const categoryId = useSelector( state => state.filter.categoryId);
    const sortName = useSelector( state => state.filter.sort.sortProperty);
    const [items, setItems] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);

    const dispatch = useDispatch();

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id));
    };


    React.useEffect( () => {
        setLoaded(false);

        const order = sortName.includes('-') ? 'asc' : 'desc';
        const sortBy = sortName.replace('-', '');
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        
        fetch(`https://631119f2826b98071a5208b4.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}`)
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr);
                setLoaded(true);
            })
        window.scrollTo(0, 0);
    }, [categoryId, sortName, currentPage]);


    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    loaded ?
                        items.map( (pizza) =>
                            <Pizza
                                title={pizza.title}
                                price={pizza.price}
                                image={pizza.imageUrl}
                                types={pizza.types}
                                sizes={pizza.sizes}
                                key={pizza.id}
                            />
                        )
                        :
                        [...new Array(6)].map( (_, index) => (<Skeleton key={index} />))
                }
            </div>
            <Pagination onChangePage={number => setCurrentPage(number)} />
        </div>
    )
}

export default Home