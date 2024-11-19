const HeroList = ({heroesList}) => {
    return (<>
        {heroesList.map((item) => {
                return (<li key={item.name}>
                  <b>{item.name}</b> will fight <b>{item.nemesis}</b>
                </li>)
              })}
    </>)

}

export default HeroList