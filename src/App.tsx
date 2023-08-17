import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [goodName, setGood] = useState('Jam');

  return(
    <main className="section container">
      {goodName !== '' ? (
          <h1 className="title is-flex is-align-items-center">
          {goodName} is selected
  
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
          onClick={() => setGood('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
       <h1 className="title">No goods selected</h1>
      )}



      <table className="table">
        <tbody>

          {goods.map(good => (
              <tr data-cy="Good" className={`${goodName === good ? 'has-background-success-light' : ''}`}>
                <td>
                  {goodName === good ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => setGood('')}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                       onClick={() => setGood(good)}
                    >
                      +
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
          ))}

        </tbody>
      </table>
    </main>
  )
};
