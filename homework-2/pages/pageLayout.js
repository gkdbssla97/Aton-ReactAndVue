export function PagingLayout({ head, limit, list, offset}) {
    return (
        <>
            <label>
                <th style={{ color: 'red' }}>페이지 당 표시할 리스트 수:</th>
                <select
                    type="number"
                    value={limit}
                    onChange={({ target: { value } }) => setLimit(Number(value))}
                >
                    <option value="100">100</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>

                </select>
            </label>
            <div className='w-screen h-screen bg-sky-200'>
                <table className="table" border={{ solid: 1 }}>
                    <thead className='justify-between'>
                        <tr className='bg-gray-800'>
                            {
                                head && head.map((head, i) => (
                                    <th key={i}>
                                        <th className='text-gray-300 px-4 py-3'>{head}</th>
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list && list.slice(offset, offset + limit).map((item, i) => (
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td style={{ fontSize: 3 }}>{item.uid}</td>
                                    <td>{item.username}</td>
                                    <td>{item.password}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                    <td><img src={item.avatar} /></td>
                                    <td>{item.gender}</td>
                                    <td>{item.phone_number}</td>
                                    <td>{item.social_insurance_number}</td>
                                    <td>{item.date_of_birth}</td>
                                    <td>{item.employment.title}</td>
                                    <td style={{ fontSize: 3 }}>{item.address.state}</td>
                                    <td style={{ fontSize: 3 }}>{item.credit_card.cc_number}</td>
                                    <td>{item.subscription.plan}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default PagingLayout;