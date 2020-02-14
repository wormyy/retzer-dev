export default function Badge({ children }) {
  return (
    <span>
      {children}
      <style jsx>{`
        span {
          margin-left: 10px;
          font-size: 12px;
          font-weight: 400;
          padding: 5px 15px;
          border-radius: 3px;
          vertical-align: text-top;
          display: inline-block;
          white-space: nowrap;
          background: #5fc383;
          color: #fff;
        }
      `}</style>
    </span>
  );
}
