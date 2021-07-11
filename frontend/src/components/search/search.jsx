import React, { useState, useEffect } from 'react';
import './search.css'
import { fetchCityCount } from '../../common/apis';

const Search = () => {

    const [searchQuery, setSearchQuery]= useState('');
    const [resultCount, setResultCount]= useState(0);
    const [isHidden, setIsHidden]= useState(true);
    const [loading, setLoading]= useState(false);


    const onSearchQueryUpdate=(e)=>{
        setSearchQuery(e.target.value);
    }

    const fetchRequest = async (searchQuery) => {
        Promise.all([
            fetchCityCount(searchQuery)
        ])
          .then(
            async ([
              cityCount
            ]) => {
                setResultCount(cityCount);
                setIsHidden((searchQuery=='' || cityCount==undefined)?true:false);
                setLoading(false);
            }
          )
          .catch(e => {
            alert(`Encountered an error in fetching count of cities`);
          });
      };

    useEffect(() => {
        setLoading(true);
        if(searchQuery!="")
            fetchRequest(searchQuery);
      }, [searchQuery]);

    return (
        <React.Fragment>
           <div className="search-container">
                <div>
                    <h2 className="heading">Enter a letter to find the count of cities starting with the given letter</h2>
                    <label className="search-label" htmlFor="search-input"></label>
                    <input
                        className="search-input"
                        type="text"
                        onChange={onSearchQueryUpdate}
                        maxLength="1"
                        type="text"
                        value={searchQuery}
                    />
                    <i className="fa fa-search search-icon"/>
                </div>
                <div>
                    {isHidden==false && !loading?
                        (<h4>The count of cities starting with {searchQuery} is {resultCount}</h4>)
                        :null
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

export default Search;
