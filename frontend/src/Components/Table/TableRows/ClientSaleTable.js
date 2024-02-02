import React, {useEffect, useState} from 'react'
import TableBtn from '../../Buttons/TableBtn'
import {map, uniqueId} from 'lodash'
import {useLocation, useNavigate} from 'react-router-dom'
import {t} from 'i18next'

export const ClientSaleTable = ({
    data,
    currentPage,
    countPage,
    currency,
    Print,
    sellers,
    addPlus,
    editComment
}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const result = (prev, usd, uzs) => {
        return currency === 'USD' ? prev + usd : prev + uzs
    }
    const reduceEl = (arr, usd, uzs) => {
        return arr.length > 0 && arr.reduce((prev, item) => {
            return result(prev, item[usd], item[uzs])
        }, 0) || 0
    }
    return (
        <>
            {map(data, (saleconnector, index) => (
                !isMobile?<tr className='tr' key={uniqueId('sales')}>
                    <td className='text-left td'>
                        {currentPage * countPage + 1 + index}
                    </td>
                    <td className='td '>
                        <div className='flex justify-between'>
                            <span>
                                {new Date(
                                    saleconnector.createdAt
                                ).toLocaleDateString()}
                            </span>
                            <span>
                                {new Date(
                                    saleconnector.createdAt
                                ).toLocaleTimeString()}{' '}
                            </span>
                        </div>
                    </td>
                    <td className='text-left td'>{saleconnector.id}</td>
                    <td className='text-left td'>
                            <div className='flex justify-between items-center'>
                                <span> {saleconnector?.client?.name}</span>
                            </div>
                    </td>
                    <td className='text-success-500 text-left td'>
                        {reduceEl(
                            saleconnector.products,
                            'totalprice',
                            'totalpriceuzs'
                        ).toLocaleString('ru-Ru')}{' '}
                        {currency}
                    </td>
                    <td className='text-warning-500 text-left td'>
                        {currency === 'UZS' ? saleconnector?.discount?.discountuzs : saleconnector?.discount?.discount}{' '}
                        {currency}
                    </td>
                    <td className='text-error-500 text-left td'>
                    {currency === 'UZS' ? saleconnector?.debt?.debtuzs : saleconnector?.debt?.debt}{' '}
                        {currency}
                    </td>
                    <td className='py-[0.375rem] td border-r-0'>
                        <div className='flex items-center justify-center gap-[0.625rem]'>
                            <TableBtn
                                type={'print'}
                                bgcolor={'bg-primary-800'}
                                onClick={() => Print(saleconnector)}
                            />
                        </div>
                    </td>
                </tr>:
                <li onClick={() => Print(saleconnector)} className='text-sm w-[90vw] bg-[white] rounded-lg m-1 list-none'>
                    <li className='border p-[10px] text-[black] text-sm flex justify-between border-s-0 border-t-0 border-e-0'>
                        <p>{t('Mijoz')}:{' '}
                        {saleconnector?.client?.name}
                        </p>
                        <p>
                        <span >
                                {new Date(
                                    saleconnector.createdAt
                                ).toLocaleDateString()}{' '}
                            </span>
                            <span>
                                {new Date(
                                    saleconnector.createdAt
                                ).toLocaleTimeString()}{' '}
                            </span>
                        </p>
                    </li>
                    <li className='border p-[10px] text-[blue] text-sm flex items-center justify-between border-s-0 border-t-0 border-e-0'>
                        
                    <p className='text-[green]'>
                    {t('Jami')}{' '}{reduceEl(
                            saleconnector.products,
                            'totalprice',
                            'totalpriceuzs'
                        ).toLocaleString('ru-Ru')}{' '}
                        {currency}
                    </p>
                    <p className='text-warning-500'>
                    {t('Chegirma')}{`: `}
                    {currency === 'UZS' ? saleconnector?.discount?.discountuzs : saleconnector?.discount?.discount}{' '}
                        {currency}
                    </p>
                        
                    </li>
                    <li className=' p-[10px] text-[blue] text-sm flex items-center justify-between '>
                        
                    <p className='text-[red]'>
                    {t('Qarz')}{' '}
                    {currency === 'UZS' ? saleconnector?.debt?.debtuzs : saleconnector?.debt?.debt}{' '}
                        {currency}
                    </p>
                    <p>
                    </p>
                        
                    </li>
                </li>
            ))}
        </>
    )
}
