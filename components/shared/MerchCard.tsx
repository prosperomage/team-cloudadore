import  { FC } from 'react';
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}
export const MerchCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div style={{ 
      border: '1px solid var(--color-border)', 
      borderRadius: '12px', 
      overflow: 'hidden',
      backgroundColor: 'var(--color-white)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ backgroundColor: '#f1f5f9', height: '220px' }}>
        {product.imageUrl && <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
      </div>
      <div style={{ padding: '1.5rem', flexGrow: 1 }}>
        <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', fontWeight: 600 }}>{product.name}</h3>
        <p style={{ color: 'var(--color-secondary-blue)', fontWeight: 'bold', marginBottom: '1.2rem' }}>
          {product.price}
        </p>
        <button style={{
          width: '100%',
          padding: '0.8rem',
          backgroundColor: 'var(--color-primary-blue)',
          color: 'var(--color-white)',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          cursor: 'pointer'
        }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};