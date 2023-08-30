import { JSX } from "preact"

export const SettingsIcon = (props: JSX.HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.89974 6.6665C9.24047 6.6665 8.596 6.862 8.04784 7.22827C7.49968 7.59454 7.07243 8.11514 6.82014 8.72423C6.56785 9.33331 6.50184 10.0035 6.63046 10.6501C6.75907 11.2967 7.07654 11.8907 7.54272 12.3569C8.00889 12.823 8.60284 13.1405 9.24944 13.2691C9.89604 13.3977 10.5663 13.3317 11.1754 13.0794C11.7844 12.8271 12.305 12.3999 12.6713 11.8517C13.0376 11.3036 13.2331 10.6591 13.2331 9.99984C13.2331 9.11578 12.8819 8.26794 12.2568 7.64281C11.6316 7.01769 10.7838 6.6665 9.89974 6.6665ZM9.89974 11.6665C9.57011 11.6665 9.24787 11.5688 8.97379 11.3856C8.69971 11.2025 8.48609 10.9422 8.35994 10.6376C8.2338 10.3331 8.20079 9.99799 8.2651 9.67469C8.32941 9.35139 8.48814 9.05441 8.72123 8.82133C8.95432 8.58824 9.25129 8.4295 9.57459 8.3652C9.89789 8.30089 10.233 8.33389 10.5375 8.46004C10.8421 8.58618 11.1024 8.79981 11.2855 9.07389C11.4687 9.34797 11.5664 9.6702 11.5664 9.99984C11.5664 10.4419 11.3908 10.8658 11.0783 11.1783C10.7657 11.4909 10.3418 11.6665 9.89974 11.6665Z"
        fill="currentColor"
      />
      <path
        d="M17.6448 11.5833L17.2748 11.37C17.4414 10.4637 17.4414 9.53463 17.2748 8.62833L17.6448 8.415C17.9293 8.25085 18.1788 8.03226 18.3788 7.77172C18.5789 7.51118 18.7256 7.21378 18.8108 6.89651C18.8959 6.57925 18.9177 6.24832 18.8749 5.92263C18.8321 5.59694 18.7256 5.28286 18.5615 4.99833C18.3973 4.7138 18.1787 4.46439 17.9182 4.26434C17.6577 4.06428 17.3603 3.91751 17.043 3.83239C16.7257 3.74726 16.3948 3.72547 16.0691 3.76824C15.7434 3.81101 15.4293 3.91751 15.1448 4.08167L14.774 4.29583C14.0736 3.69743 13.2687 3.23354 12.3998 2.9275V2.5C12.3998 1.83696 12.1364 1.20107 11.6676 0.732233C11.1987 0.263392 10.5629 0 9.89982 0C9.23677 0 8.60089 0.263392 8.13205 0.732233C7.66321 1.20107 7.39982 1.83696 7.39982 2.5V2.9275C6.53097 3.23464 5.72636 3.69967 5.02648 4.29917L4.65398 4.08333C4.07935 3.75181 3.39655 3.66214 2.7558 3.83405C2.11505 4.00596 1.56884 4.42536 1.23732 5C0.905795 5.57464 0.816126 6.25743 0.988035 6.89818C1.15994 7.53893 1.57935 8.08515 2.15398 8.41667L2.52398 8.63C2.35741 9.5363 2.35741 10.4654 2.52398 11.3717L2.15398 11.585C1.57935 11.9165 1.15994 12.4627 0.988035 13.1035C0.816126 13.7442 0.905795 14.427 1.23732 15.0017C1.56884 15.5763 2.11505 15.9957 2.7558 16.1676C3.39655 16.3395 4.07935 16.2499 4.65398 15.9183L5.02482 15.7042C5.72545 16.3027 6.53063 16.7666 7.39982 17.0725V17.5C7.39982 18.163 7.66321 18.7989 8.13205 19.2678C8.60089 19.7366 9.23677 20 9.89982 20C10.5629 20 11.1987 19.7366 11.6676 19.2678C12.1364 18.7989 12.3998 18.163 12.3998 17.5V17.0725C13.2687 16.7654 14.0733 16.3003 14.7731 15.7008L15.1456 15.9158C15.7203 16.2474 16.4031 16.337 17.0438 16.1651C17.6846 15.9932 18.2308 15.5738 18.5623 14.9992C18.8938 14.4245 18.9835 13.7417 18.8116 13.101C18.6397 12.4602 18.2203 11.914 17.6456 11.5825L17.6448 11.5833ZM15.5215 8.43667C15.8037 9.45922 15.8037 10.5391 15.5215 11.5617C15.4722 11.7396 15.4834 11.9289 15.5534 12.0998C15.6234 12.2707 15.7482 12.4135 15.9081 12.5058L16.8115 13.0275C17.003 13.138 17.1428 13.3201 17.2 13.5336C17.2573 13.7472 17.2274 13.9747 17.1169 14.1663C17.0064 14.3578 16.8243 14.4975 16.6108 14.5548C16.3972 14.6121 16.1697 14.5822 15.9782 14.4717L15.0731 13.9483C14.9131 13.8556 14.7267 13.8188 14.5434 13.8437C14.36 13.8686 14.1902 13.9538 14.0606 14.0858C13.3189 14.843 12.3845 15.3833 11.3581 15.6483C11.179 15.6944 11.0203 15.7987 10.907 15.9449C10.7937 16.0911 10.7322 16.2709 10.7323 16.4558V17.5C10.7323 17.721 10.6445 17.933 10.4882 18.0893C10.332 18.2455 10.12 18.3333 9.89898 18.3333C9.67797 18.3333 9.46601 18.2455 9.30973 18.0893C9.15345 17.933 9.06565 17.721 9.06565 17.5V16.4567C9.06574 16.2717 9.00429 16.092 8.89099 15.9458C8.77768 15.7996 8.61896 15.6952 8.43982 15.6492C7.41344 15.3831 6.47926 14.8416 5.73815 14.0833C5.60859 13.9513 5.43876 13.8661 5.25545 13.8412C5.07213 13.8163 4.88574 13.8531 4.72565 13.9458L3.82232 14.4683C3.72751 14.5239 3.62264 14.5602 3.51375 14.5751C3.40487 14.59 3.29411 14.5832 3.18786 14.5551C3.08161 14.527 2.98197 14.4782 2.89467 14.4114C2.80737 14.3446 2.73413 14.2613 2.67918 14.1661C2.62423 14.0709 2.58865 13.9658 2.57448 13.8568C2.56031 13.7479 2.56785 13.6372 2.59664 13.5311C2.62544 13.425 2.67493 13.3257 2.74226 13.2389C2.80959 13.152 2.89344 13.0793 2.98898 13.025L3.89232 12.5033C4.05227 12.411 4.17704 12.2682 4.24703 12.0973C4.31702 11.9264 4.32826 11.7371 4.27898 11.5592C3.99678 10.5366 3.99678 9.45672 4.27898 8.43417C4.32737 8.25657 4.3156 8.06795 4.24549 7.89774C4.17539 7.72754 4.05091 7.58534 3.89148 7.49333L2.98815 6.97167C2.79664 6.86116 2.65688 6.6791 2.5996 6.46555C2.54232 6.25199 2.57223 6.02442 2.68273 5.83292C2.79324 5.64141 2.9753 5.50164 3.18885 5.44437C3.40241 5.38709 3.62997 5.41699 3.82148 5.5275L4.72648 6.05083C4.88613 6.14376 5.07213 6.18101 5.25526 6.15672C5.43838 6.13244 5.60824 6.048 5.73815 5.91667C6.47989 5.15945 7.41434 4.61918 8.44065 4.35417C8.62034 4.30797 8.77948 4.20313 8.89284 4.05625C9.00621 3.90938 9.06732 3.72887 9.06648 3.54333V2.5C9.06648 2.27899 9.15428 2.06702 9.31056 1.91074C9.46684 1.75446 9.6788 1.66667 9.89982 1.66667C10.1208 1.66667 10.3328 1.75446 10.4891 1.91074C10.6454 2.06702 10.7331 2.27899 10.7331 2.5V3.54333C10.7331 3.7283 10.7945 3.90804 10.9078 4.05423C11.0211 4.20043 11.1798 4.30478 11.359 4.35083C12.3857 4.61679 13.3201 5.15824 14.0615 5.91667C14.191 6.04872 14.3609 6.13391 14.5442 6.15881C14.7275 6.1837 14.9139 6.14689 15.074 6.05417L15.9773 5.53167C16.0721 5.47609 16.177 5.43981 16.2859 5.42492C16.3948 5.41003 16.5055 5.41683 16.6118 5.44492C16.718 5.47301 16.8177 5.52184 16.905 5.58859C16.9923 5.65535 17.0655 5.73872 17.1205 5.83389C17.1754 5.92907 17.211 6.03417 17.2252 6.14316C17.2393 6.25214 17.2318 6.36285 17.203 6.46891C17.1742 6.57497 17.1247 6.67429 17.0574 6.76114C16.99 6.848 16.9062 6.92068 16.8106 6.975L15.9073 7.49667C15.7482 7.58892 15.6241 7.73123 15.5543 7.90141C15.4845 8.07159 15.4729 8.26008 15.5215 8.4375V8.43667Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SettingsIcon
