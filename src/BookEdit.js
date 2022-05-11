
export function BookEdit(props) {

    return (<div className='editContainer'>
        <form className='edit'>
            <label>
                <span> Book Name:</span>
                <input type="text" name="name" autoComplete='off' />
            </label>
            <label>
                <span> Author Name:</span>
                <input type="text" name="name" autoComplete='off' />
            </label>
            <label>
                <span> published Date:</span>
                <input type="month" name="name" autoComplete='off' />
            </label>
            <label>
                <span>Price:</span>
                <input type="number" name="name" autoComplete='off' />
            </label>
            <label>
                <input className='button' type="submit" name="name" />
            </label>
        </form>
    </div>
    );
}