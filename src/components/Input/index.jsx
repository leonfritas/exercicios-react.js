import './styles.css'

export const Input = ({searchValue, handleChange})=>{
    return(
        <input
              value={searchValue}
              onChange={handleChange}
              type="search"
              placeholder='Type your search'
            ></input>
    )
}