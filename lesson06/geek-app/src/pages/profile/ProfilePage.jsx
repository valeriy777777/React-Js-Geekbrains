// /* eslint-disable */

import { useMemo } from 'react';
//
import {useSelector, useDispatch} from 'react-redux';
//
import { getName, getIsShowName } from '../../store/profile/selectors.js';
import { showName } from '../../store/profile/actions.js';

const ProfilePage = () => {
    //
    const name = useSelector(getName);
    const isShowName = useSelector(getIsShowName);
    //
    const dispatch = useDispatch();

    const onChangeCheckbox = (ev) => {
        const checked = ev.target.checked;
        dispatch( showName(checked) );
    }

    //
    const headerName = useMemo(
        () => {
            return isShowName ? <h3>{name}</h3> : null;
        },
        // eslint-disable-next-line
        [isShowName]
    );

    //
    return (
        <div>
            {headerName}
            <div style={{margin: '1rem'}}>
                <label>
                    <input
                        type="checkbox"
                        name="subscription"
                        checked={isShowName}
                        onChange={(ev) => onChangeCheckbox(ev)}
                    />
                    &nbsp;&nbsp;Show name
                </label>
            </div>
        </div>
    );
}

export { ProfilePage };
