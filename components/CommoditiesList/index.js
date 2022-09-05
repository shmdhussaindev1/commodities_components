import PropTypes from "prop-types";

import styles from "./CommoditiesList.module.scss";

import UpIcon from "/public/assets/svg/icons/stock_up.svg";
import DownIcon from "/public/assets/svg/icons/stock_down.svg";
import NeutralIcon from "/public/assets/svg/icons/stock_neutral.svg";

export default function CommoditiesList({ componentData }) {
	let commoditiesData = componentData;

	return (
		<div className={styles.comp}>
			<div className={`${styles.currency_note}`}>
				* الأسعار بالدولار الأميركي
			</div>
			<div className={styles.data_table}>
				<table cellPadding={10} cellSpacing={20}>
					<thead>
						<tr>
							<th className={`${styles.col_display_name}`}>السلعة</th>
							<th className={`${styles.col_price}`}>السعر</th>
							<th className={`${styles.col_change} ${styles.mobile_hidden}`}>
								التغير
							</th>
							<th className={`${styles.col_pct_change}`}>التغير% </th>
							<th className={`${styles.col_open_val} ${styles.mobile_hidden}`}>
								الافتتاح
							</th>
							<th className={`${styles.col_close_val} ${styles.mobile_hidden}`}>
								الإغلاق
							</th>
						</tr>
					</thead>
					<tbody>
						{commoditiesData.map((item) => {
							let stockStatusColor = "color_neutral";
							let stockSign;
							let IconEl;
							let pctChangeWithSign;
							let netChangeWithSign;
							if (item.pctchange < 0) {
								stockStatusColor = "color_red";
								IconEl = <DownIcon></DownIcon>;
								stockSign = "-";
								netChangeWithSign = `${stockSign}${Math.abs(item.netChange)}`;
								pctChangeWithSign = `${Math.abs(item.pctchange)}${stockSign}`;
								// stockSign = '-'
							} else if (item.pctchange > 0) {
								stockStatusColor = "color_green";
								stockSign = "+";
								netChangeWithSign = `${stockSign}${item.netChange}`;
								pctChangeWithSign = `${item.pctchange}${stockSign}`;
								IconEl = <UpIcon></UpIcon>;
							} else {
								stockStatusColor = "color_neutral";
								netChangeWithSign = `${item.netChange}`;
								pctChangeWithSign = `${item.pctchange}`;
								IconEl = <NeutralIcon></NeutralIcon>;
							}
							return (
								<tr key={item.symbol}>
									<td className={`${styles.col_display_name}`}>
										{item.displayName}
									</td>
									<td className={`${styles.col_price}`}>{item.tradePrice}</td>
									<td
										className={`${styles.col_change} ${styles.mobile_hidden}`}
									>
										{netChangeWithSign}
									</td>
									<td
										className={`${styles.col_pct_change} ${styles[stockStatusColor]}`}
									>
										{pctChangeWithSign}
										<span className={styles.trend_icon}>{IconEl}</span>
									</td>
									<td
										className={`${styles.col_open_val} ${styles.mobile_hidden}`}
									>
										{item.openValue}
									</td>
									<td
										className={`${styles.col_close_val} ${styles.mobile_hidden}`}
									>
										{item.closeValue}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

CommoditiesList.propTypes = {
	componentData: PropTypes.array.isRequired,
};
