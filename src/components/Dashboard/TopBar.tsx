'use client';
import React, { useEffect, useState } from 'react';
import { FiCalendar } from 'react-icons/fi';

export const TopBar = () => {
  const [date, setDate] = useState(new Date());
  const [diaSemana, setDiaSemana] = useState('');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');

  const [dataHoraFormatada, setDataHoraFormatada] = useState('');

  useEffect(() => {
    setDate(new Date());
    setDiaSemana(date.toLocaleString('pt-BR', { weekday: 'long' }));
    setDia(date.toLocaleString('pt-BR', { day: '2-digit' }));
    setMes(date.toLocaleString('pt-BR', { month: '2-digit' }));
    setAno(date.toLocaleString('pt-BR', { year: 'numeric' }));

    setDataHoraFormatada(`${diaSemana}, ${dia}/${mes}/${ano}`);
    console.log('aaa');
  }, [dia]);

  return (
    <div
      className='border-b px-4 mb-4 mt-2 pb-4 
    border-stone-200'
    >
      <div className='flex items-center justify-between p-0.5'>
        <div>
          <span className='text-sm font-bold block'>🚀 Bom dia, Eduardo!</span>
          <span className='text-xs block text-stone-500'>
            {dataHoraFormatada}
          </span>
        </div>

        <div
          className='flex text-sm
        items-center gap-2 bg-stone-100
        transition-colors hover:bg-violet-100
        hover:text-violet-700 px-3 py-1.5
        rounded'
        >
          <FiCalendar />
          <span>Últ. 6 Meses</span>
        </div>
      </div>
    </div>
  );
};
