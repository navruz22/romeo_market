import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UniversalModal from '../../Components/Modal/UniversalModal'
import Table from '../../Components/Table/Table'
import TableMobile from '../../Components/Table/TableMobile'
import { universalSort } from './../../App/globalFunctions'
import { t } from 'i18next'
import SmallLoader from '../../Components/Spinner/SmallLoader.js'
import { getClientsSales } from './clientsSlice'
import { useLocation } from 'react-router-dom'

const ClientsSales = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const dispatch = useDispatch()

    const location = useLocation()

    const { market: _id, user } = useSelector((state) => state.login)
    const { clients_info } =
        useSelector((state) => state.clients)
    const { sellings } = useSelector((state) => state.sellings)
    const { currencyType, currency } = useSelector((state) => state.currency)
    const [currentPage, setCurrentPage] = useState(0)
    const [countPage, setCountPage] = useState(10)
    const [sendingSearch, setSendingSearch] = useState({
        id: '',
        client: ''
    })
    const [currentData, setCurrentData] = useState(clients_info)
    console.log(clients_info);
    // Payments STATES
    const [modalVisible, setModalVisible] = useState(false)
    const [sorItem, setSorItem] = useState({
        filter: '',
        sort: '',
        count: 0
    })
    const [storeData, setStoreData] = useState(clients_info)
    const [modalBody, setModalBody] = useState('')
    const [modalData, setModalData] = useState(null)
    const [totalDebt, setTotalDebt] = useState({
        usd: 0,
        uzs: 0
    })
    const [customLoading, setCustomLoading] = useState(false)
    const [printBody, setPrintBody] = useState({})

    const headers = [
        {
            title: '№'
        },
        {
            title: t('Sana'),
            filter: 'createdAt'
        },
        {
            title: t('ID'),
            filter: 'id'
        },
        {
            title: t('Mijoz')
        },
        {
            title: t('Jami')
        },
        {
            title: t('Chegirma')
        },
        {
            title: t('Qarz')
        },
        {
            title: '',
            styles: 'w-[7rem]'
        }
    ]

    const toggleCheckModal = () => {
        setModalVisible(!modalVisible)
        setModalBody('')
        setModalData(null)
    }
    const toggleSaleCheck = () => {
        setModalVisible(!modalVisible)
        setModalBody('')
        setModalBody(null)
    }

    const convertToUsd = (value) => Math.round(value * 1000) / 1000
    const convertToUzs = (value) => Math.round(value)

    const toggleModal = () => {
        setModalBody('')
        setModalVisible(!modalVisible)
        setTimeout(() => {
            // setCurrentProduct(null)
        }, 500)
    }

    const handleClosePay = () => {
        setModalVisible(false)
        setTimeout(() => {
            setModalBody('')
        }, 500)
    }

    const handleClickPrint = (saleconnector) => {
        // if (saleconnector.payment) {
            setModalBody('checkSell')
            setModalData(saleconnector)
            setModalVisible(!modalVisible)
        // } else {
        //     setModalBody('allChecks')
        //     setModalData(saleconnector)
        //     setModalVisible(!modalVisible)
        // }
    }

    const filterData = (filterKey) => {
        if (filterKey === sorItem.filter) {
            switch (sorItem.count) {
                case 1:
                    setSorItem({
                        filter: filterKey,
                        sort: '1',
                        count: 2
                    })
                    universalSort(
                        currentData,
                        setCurrentData,
                        filterKey,
                        1,
                        storeData
                    )
                    break
                case 2:
                    setSorItem({
                        filter: filterKey,
                        sort: '',
                        count: 0
                    })
                    universalSort(
                        currentData,
                        setCurrentData,
                        filterKey,
                        '',
                        storeData
                    )
                    break
                default:
                    setSorItem({
                        filter: filterKey,
                        sort: '-1',
                        count: 1
                    })
                    universalSort(
                        currentData,
                        setCurrentData,
                        filterKey,
                        -1,
                        storeData
                    )
            }
        } else {
            setSorItem({
                filter: filterKey,
                sort: '-1',
                count: 1
            })
            universalSort(currentData, setCurrentData, filterKey, -1, storeData)
        }
    }



    useEffect(() => {
        const data = location.state
        let body = {
            market: _id,
            search: {
                id: '',
                client: data
            }
        }
        dispatch(getClientsSales(body))
    }, [
        dispatch,
        _id,
    ])

    useEffect(() => {
        setCurrentData(clients_info)
    }, [clients_info])

    return (
        <div className='relative overflow-auto '>
            {customLoading && (
                <div
                    className='fixed backdrop-blur-[2px] z-[100] left-0 top-0 right-0 bottom-0 bg-white-700 flex flex-col items-center justify-center w-full h-full'>
                    <SmallLoader />
                </div>
            )}
            <div className='lg:ps-[20px] lg:tableContainerPadding '>
                {currentData.length > 0 &&
                    (!isMobile ? (
                        <Table
                            page={'clientssales'}
                            headers={headers}
                            data={currentData}
                            currentPage={currentPage}
                            countPage={countPage}
                            currency={currencyType}
                            reports={true}
                            Print={handleClickPrint}
                            Sort={filterData}
                            sortItem={sorItem}
                            totalDebt={totalDebt}
                        />
                    ) : (
                        <TableMobile
                            page={'clientssales'}
                            headers={headers}
                            data={currentData}
                            currentPage={currentPage}
                            countPage={countPage}
                            currency={currencyType}
                            reports={true}
                            Print={handleClickPrint}
                            Sort={filterData}
                            sortItem={sorItem}
                        />
                    ))}
            </div>
            <UniversalModal
                body={modalBody}
                toggleModal={
                    modalBody === 'sell'
                        ? toggleModal
                        : modalBody === 'complete'
                            ? handleClosePay
                            : modalBody === 'allChecks'
                                ? toggleSaleCheck
                                : toggleCheckModal
                }
                isOpen={modalVisible}
                payment={modalData}
                printedSelling={
                    modalBody === 'dailySaleCheck' ? printBody : modalData
                }
                product={modalData}
                headers={headers}
                headerText={
                    modalBody === 'complete' &&
                    'To\'lovni amalga oshirishni tasdiqlaysizmi?'
                }
                title={
                    modalBody === 'complete' &&
                    'To\'lovni amalga oshirgach bu ma`lumotlarni o\'zgaritirib bo\'lmaydi!'
                }
            />
        </div>
    )
}
export default ClientsSales
